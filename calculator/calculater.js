        function button(num) {

            document.getElementsByClassName("box2")[0].innerHTML += num

        }
        function displayclear() {

            document.getElementsByClassName("box2")[0].innerHTML = ""
        }
        function calculation() {
            document.getElementsByClassName("box2")[0].innerHTML = eval(document.getElementsByClassName("box2")[0].innerHTML)
        }





