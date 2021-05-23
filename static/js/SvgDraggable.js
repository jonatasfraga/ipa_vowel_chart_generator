// Based on the article: https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/


function makeDraggable(evt) {
    let svg = evt.target;
    svg.addEventListener('mousedown', startDrag, false);
    svg.addEventListener('mousemove', drag, false);
    svg.addEventListener('mouseup', endDrag, false);
    svg.addEventListener('mouseleave', endDrag);

    function getMousePosition(evt) {
      var CTM = svg.getScreenCTM();
      return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
    }

    let selectedElement, offset, transform;

    function startDrag(evt) {
      let elemento = evt.target.parentElement
      if (elemento.classList.contains('ipa')) {
        selectedElement = elemento
        if (!elemento.id.includes("-")){
             let NewG = elemento.cloneNode(true)
              NewG.id = NewG.id + "-" + Date.now()
              NewG.classList.add("generate")
              document.getElementById('g3601').appendChild(NewG)
              selectedElement = NewG;
              AddListener(selectedElement)
        }

        offset = getMousePosition(evt);

        // Make sure the first transform on the element is a translate transform
        let transforms = selectedElement.transform.baseVal;

        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
          // Create an transform that translates by (0, 0)
          var translate = svg.createSVGTransform();
          translate.setTranslate(0, 0);
          selectedElement.transform.baseVal.insertItemBefore(translate, 0);
        }

        // Get initial translation
        transform = transforms.getItem(0);
        offset.x -= transform.matrix.e;
        offset.y -= transform.matrix.f;
      }
    }

    function drag(evt) {
      if (selectedElement) {
        evt.preventDefault();
        var coord = getMousePosition(evt);
        transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
      }
    }

    function endDrag(evt) {
      selectedElement = false;
    }
  }