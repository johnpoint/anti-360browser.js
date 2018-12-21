# anti-360browser.js

一个检测浏览器是否是360浏览器的 js 

## 使用
直接引用 `https://raw.githubusercontent.com/johnpoint/anti-360browser.js/master/anti-360browser.js` 即可

警告！如果没意外的话，这个js执行以后将覆盖网页的内容，如果不想覆盖网页的内容需要将
```
if (new Browser().browser == '360' || new Browser().browser == '360SE' || new Browser().browser == '360SE') {
    window.alert('请不要使用360浏览器');
    document.write('<html><body bgcolor="red"><h1>请不要使用360浏览器</h1></body></html>')
}
```
改为
```
if (new Browser().browser == '360' || new Browser().browser == '360SE' || new Browser().browser == '360SE') {
    window.alert('请不要使用360浏览器');
}
```

## 效果
![Selection_007.png](https://i.loli.net/2018/12/21/5c1cff0c565c6.png)
![Selection_008.png](https://i.loli.net/2018/12/21/5c1cffd2d26ab.png)
## 感谢

核心代码：
[mumuy](https://github.com/mumuy) 的 浏览器分析判断工具 
项目地址：https://github.com/mumuy/browser
