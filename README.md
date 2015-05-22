# Selectem 0.1.0

Custom select items dropdown.

 * Lightweight 1.2kb (minified)
 * No dependencies required  (Plain JavaScript)
 * Easy to customize
 * Pretty nifty list items filter
 * Preprocessor used SCSS/Compass

> Check out the [live Demo](http://codepen.io/ElmahdiMahmoud/full/NqRzmr/).

## Getting Started

```
git clone https://github.com/elmahdim/selectem.git
```

## Usage

Include required files `.css` and `.js`

```html
<link rel="stylesheet" href="path-to/assets/css/selectem.min.css">
<script src="path-to/assets/css/selectem.min.js"></script>
```

HTML Markup

```html
  <div class="selectem"> 
    <span class="selectem_label">...</span>
    <div class="selectem_dropdown">
      <input class="selectem-value" name="selectemVal" type="hidden" >
      <input class="selectem-input" name="filter" autofocus type="text" autocomplete="off" data-filter >
      <ul class="selectem-items">
        <li data-val="...">
          <span class="item-avatar">
            <img src="..." alt="..." />
          </span>
          <span class="item-label">
            ...
          </span>
        </li>
      </ul>
    </div>
  </div>
```

Get the selected value

```javascript
var selectemVal = document.querySelector('input[name="selectemVal"]');
console.log (selectemVal); // returns the selected data-val attribute from the selectem-items list
```

## License

The MIT License ([MIT](https://github.com/elmahdim/selectem/blob/master/LICENSE))


## Change log

### v0.1.0
* Initial release