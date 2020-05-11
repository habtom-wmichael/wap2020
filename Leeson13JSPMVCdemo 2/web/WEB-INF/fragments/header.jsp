<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/Leeson13JSPMVCdemo/home">CS472-WAP ::: Lesson13 - JSP-MVC-Demo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/Leeson13JSPMVCdemo/home">Home <span class="sr-only">(current)</span></a>
                </li>
<%--                <li class="nav-item">--%>
<%--                    <a class="nav-link" href="#">About</a>--%>
<%--                </li>--%>
                <li class="nav-item">
                    <a class="nav-link" href="/Leeson13JSPMVCdemo/contact-messages">Contact Messages</a>
                </li>
            </ul>
            <form action="/Leeson13JSPMVCdemo/search" method="post" class="form-inline my-2 my-lg-0">
                <input name="matchedString" class="form-control mr-sm-2" type="text" placeholder="Search">
                <button  class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</header>
