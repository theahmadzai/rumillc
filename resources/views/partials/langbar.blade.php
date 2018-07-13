<div class="langbar">
    <div class="control has-icons-left">
        <div class="select is-rounded">
            <form action="/lang" method="post" onchange="this.submit()">
                @csrf
                <select name="lang">
                    <option value="en" {{ LaravelLocalization::getCurrentLocale() == 'en' ? 'selected' : ''}}>EN</option>
                    <option value="ps" {{ LaravelLocalization::getCurrentLocale() == 'ps' ? 'selected' : ''}}>PS</option>
                </select>
            </form>
        </div>
        <div class="icon is-small is-left">
            <i class="fa fa-globe"></i>
        </div>
    </div>
</div>
