let display=document.querySelector('input[name="display"]')
        function calculate(){
            try{
                let input=display.value;
                input = input.replace(/(\d+(\.\d+)?)\(/g, "$1*(");
                input = input.replace(/\)(\d+(\.\d+)?|\()/g, ")*$1");
                let output=eval(input);
                display.value=output;
            }catch(error){
                display.value="Syntax Error";
            }
            adjustFontSize();
        }
        document.addEventListener("keydown",function(event){
            if(event.key ==="Enter" ){
                event.preventDefault();
                calculate();
            }
        })
        function adjustFontSize(){
            let baseSize = 1.5; // Default font size in rem
            let maxSize = 2;    // Max font size
            let minSize = 1;    // Min font size
            let lengthFactor = 0.05; // How much to reduce per character
            let newSize = maxSize - (display.value.length * lengthFactor);
            display.style.fontSize = `${Math.max(minSize, newSize)}rem`;
        }
        display.addEventListener("input", adjustFontSize);
        function checkError(){
            let errorValues = ["Syntax Error", "Infinity", "-Infinity", "undefined"];
            if (errorValues.includes(display.value)) {
                display.value = "";
            }
        }