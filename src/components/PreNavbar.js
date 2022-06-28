import React from "react";
import "../styles/PreNavbar.css";


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.15 21.55q-.725 0-1.237-.512Q5.4 20.525 5.4 19.8t.513-1.238q.512-.512 1.237-.512.725 0 1.237.512.513.513.513 1.238t-.513 1.238q-.512.512-1.237.512Zm9.7 0q-.725 0-1.237-.512-.513-.513-.513-1.238t.513-1.238q.512-.512 1.237-.512.725 0 1.237.512.513.513.513 1.238t-.513 1.238q-.512.512-1.237.512ZM6.025 5.75l2.525 5.3h6.825q.075 0 .15-.038.075-.037.1-.112l2.7-4.875q.05-.1 0-.187-.05-.088-.15-.088ZM5.3 4.25h13.875q.7 0 .988.512.287.513-.013 1.088l-3.225 5.8q-.225.425-.625.662-.4.238-.9.238H8.1l-1.15 2.125q-.075.125-.012.25.062.125.212.125H18.6v1.5H7.15q-1 0-1.5-.862-.5-.863-.025-1.713L7.05 11.4 3.4 3.75H1.5v-1.5h2.85Zm3.25 6.8h7Z"/></svg>
function PreNavbar() {
  return (
    <div className="preNavbar">

      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a> 
        <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a>{" "}
        <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a>{" "}
        <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
      </div>

      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> 
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SIGN UP
        </a>{" "}
        <span>|</span>
        <a href="https://store.mi.com/in/site/login">{cartIcon}CART (0)</a>
      </div>
    </div>
  );
}

export default PreNavbar;
