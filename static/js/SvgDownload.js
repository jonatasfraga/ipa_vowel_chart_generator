
  function DownloadSVG(){
    let svg_elem = document.getElementById("svg10472");
    let cloned = svg_elem.cloneNode(true);
    cloned.id = "cloned"
    cloned.getElementById('g3539').remove()
    cloned.getElementById('g3590').remove()
    let myElement = cloned.getElementById('layer1')
    myElement.setAttribute('transform','translate(-75,-10)')
    cloned.setAttribute("viewBox", "0 0 45 50");
    cloned.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    var svgData = cloned.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "arq.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  function AddListener(element){
              if(element.id.includes("g")){
                 element.addEventListener("mouseover", function() {
                   element.children[0].style.fill = "#00FF00"
                   element.children[0].style.opacity = "1"
                 });
                 element.addEventListener("mouseout", function() {
                   element.children[0].style.fill = "#FFFFFF"
                    element.children[0].style.opacity = "0.1"
                 });
              }
              else{
                 element.addEventListener("mouseover", function() {
                   element.children[0].style.fill = "#00FF00"
                 });
                 element.addEventListener("mouseout", function() {
                   element.children[0].style.fill = "#FFFFFF"
                 });
              }

        }

        function AddListenerAll(){
          const cbox = document.querySelectorAll(".ipa");
           for (let i = 0; i < cbox.length; i++) {
              AddListener(cbox[i])
           }
        }