var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();

// 以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。
// 注意: web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。