Prestashop classic theme audits.
========

Work on performance prestashop 1.7 classic theme.

Development configurations
--------
- PHP-5.6, Apache-2.4 + Nginx-1.9
- Prestashop v1.7.3.0
- clasic theme
- modules on home page (image slider, featured products, banner, specials block, custom text blocks, new products block)
- Performance configuration (for audit with cach): 
  - Template compilation - Recompile templates if the files have been updated
  - Cache - yes
  - Use cache - yes

First Audit
--------
  After installation Prestashop I made audit of default classic theme.
  I did audit in two mode : whithout anable cach, and with cach. All results you can find in folder `audit`. 
  Result after first audit:
  
  |  -          |     PWA     | Performance | Accessibility | Best Practices |
  | :---------: | :---------: | :---------: | :-----------: | :------------: |
  |  -          |     36      |      47     |       94      |        63      |
  |  with cach  |     --      |      47     |       --      |        --      |
  

Second Audit (first changes)
----------
  So, first that I implemented to inprove performance it is lazy loading images. I used [Layzr.js](http://callmecavs.com/layzr.js/).
  Second, add defer attr to script tag. Also add `font-display: fallback` to `@font-face`. 
  Follow the advice that give me Chrome DevTools improve `Accessibilyty` to **100** (Hell yeah! 😺). Allso had good `PWA` and `Best Practices` numbers.
  
  |  -          |     PWA     | Performance | Accessibility | Best Practices |
  | :---------: | :---------: | :---------: | :-----------: | :------------: |
  |  -          |     45      |      66     |       100     |        75      |
  |  with cach  |     --      |      68     |       --      |        --      |
  
  
Roadmap
----------
- [x]  Defered scripts
- [ ] Defered css
- [x] lazy-load images
- [ ] implement pwa
- [x] improve accessibility

Contribute
----------

- Issue Tracker: github.com/$project/$project/issues
- Source Code: github.com/$project/$project

Support
-------

If you are having issues, please let me know.
