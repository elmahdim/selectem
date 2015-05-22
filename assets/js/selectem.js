/*
 * selectem 0.1.0
 * https://github.com/elmahdim/selectem
 * Author: @ElmahdiMahmoud
 * https://github.com/elmahdim
 */

Element.prototype.hc = function(a) {
    return (new RegExp(" " + a + " ")).test(" " + this.className + " ")
};
Element.prototype.tc = function(a) {
    var b = " " + this.className.replace(/[\t\r\n]/g, " ") + " ";
    if (this.hc(a)) {
        for (; 0 <= b.indexOf(" " + a + " ");) b = b.replace(" " + a + " ", " ");
        this.className = b.replace(/^\s+|\s+$/g, " ")
    } else this.className += " " + a;
    return this
};
[].forEach.call(document.querySelectorAll(".selectem"), function(a) {
    var b = a.querySelectorAll("li"),
        e = a.querySelector(".selectem_label");
    a.querySelector(".selectem_dropdown");
    var g = a.querySelector(".selectem-value"),
        f = a.querySelector("[data-filter]");
    e.addEventListener("click", function() {
        a.tc("is-active")
    }, !1);
    for (var d = 0; d < b.length; d++) b[d].addEventListener("click", function() {
        var b = this.getAttribute("data-val"),
            c = this.querySelector(".item-label");
        g.value = b;
        e.innerText = c.innerText;
        a.className =
            a.className.replace(/(?:^|\s)is-active(?!\S)/g, "")
    }, !1);
    f.onkeyup = function() {
        for (var a = f.value.toUpperCase(), c = 0; c < b.length; c++) {
            var d = b[c].innerText,
                e = b[c].getAttribute("data-val"); - 1 !== d.toUpperCase().indexOf(a) || -1 !== e.toUpperCase().indexOf(a) ? b[c].style.display = "table-row" : b[c].style.display = "none"
        }
    }
});