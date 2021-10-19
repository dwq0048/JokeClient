const Helper = {
    IS_MOBILE : () => {
        const UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
            return true
        }else{
            return false
        }
    },
    Bounce : (find, done) => {
        (!find || find == undefined) ? find = 'bounce' : undefined;
        (!done || done == undefined) ? done = 'done' : undefined;
        find = '.' + find;
		const BounceList = document.querySelectorAll(find);
		BounceList.forEach((item) => { item.classList.add(done) });
    },
}

export default Helper
