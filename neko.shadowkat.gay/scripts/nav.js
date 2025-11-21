document.getElementById('navigation').innerHTML = `
<div class="right-header">
    <div class="nav-link"><a class="link" href="index.html">home</a></div>
    <div class="nav-link"><a class="link" href="not_found.html">about</a></div>
    <div class="nav-link"><a class="link" href="microblog.html">microblog</a></div>
    <div class="nav-link" style="border-right: none; --dropdownHeight: 56px;">
        <a class="dropdown">projects</a>
        <div class="dropdown-content">
            <a class="dropdown-link" href="blog.html">blog</a>
            <a class="dropdown-link" href="coding.html">coding</a>
        </div>
    </div>
</div>`