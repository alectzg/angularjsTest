
1.注意事项

  ng-src src属性
  ng-href href属性
  ng-checked 选中状态
  ng-selected 被选择状态
  ng-disabled 禁用状态
  ng-multiple 多选状态
  ng-readonly 只读状态    

2.索引   

$index 当前索引
$first 是否为头元素
$middle 是否为非头非尾元素
$last 是否为尾元素

3.事件绑定

 事件绑定是模板指令中很好用的一部分。我们可以把相关事件的处理函数直接写在 DOM 中，这样做的最大好处就是可以从 DOM 结构上看出业务处理的形式，你知道当你点击这个节点时哪个函数被执行了。

    ng-change
    ng-click
    ng-dblclick
    ng-mousedown
    ng-mouseenter
    ng-mouseleave
    ng-mousemove
    ng-mouseover
    ng-mouseup
    ng-submit

  对于事件对象本身，在函数调用时可以直接使用 $event 进行传递： 
    <p ng-click="click($event)">点击</p>
    <p ng-click="click($event.target)">点击</p>


4.form
为了让form以及控件、ngModel富有样式，可以增加以下class：

    ng-valid
    ng-invalid
    ng-pristine（从未输入过）
    ng-dirty（输入过）

