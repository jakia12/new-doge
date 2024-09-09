(() => {
    "use strict";
    const e = () => {
            const e = document.querySelector(".header__menu-icon"),
                t = document.querySelector(".menu__body"),
                s = document.querySelector("body");
            e.classList.contains("_active") && (s.classList.remove("_lock"), e.classList.remove("_active"), e.classList.add("_inactive"), t.classList.remove("_active"))
        },
        t = () => {
            document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`)
        };
    (() => {
        const e = document.querySelector(".header__menu-icon"),
            t = document.querySelector(".menu__body"),
            s = document.querySelector("body");
        e && e.addEventListener("click", (function() {
            s.classList.toggle("_lock"), e.classList.toggle("_active"), t.classList.toggle("_active"), e.classList.contains("_active") ? e.classList.remove("_inactive") : e.classList.add("_inactive")
        }))
    })(), t(), (() => {
            const e = document.querySelectorAll(".lazy"),
                t = new IntersectionObserver(((e, t) => {
                    e.forEach((e => {
                        if (e.isIntersecting) {
                            const o = e.target;
                            s(o), t.unobserve(o)
                        }
                    }))
                }), {
                    threshold: 0
                });
            e.forEach((e => {
                t.observe(e)
            }));
            const s = e => {
                const t = e.querySelectorAll("img[data-src], source[data-srcset]");
                t.length && t.forEach((e => {
                    e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"))
                }))
            }
        })(),
        function() {
            const e = document.querySelectorAll("[data-move]");
            if (e.length > 0)
                for (let t = 0; t < e.length; t++) {
                    const s = e[t],
                        o = s.dataset.move.split(", ")[0],
                        r = s.dataset.move.split(", ")[1],
                        n = document.querySelector(`[data-desk*=${o}]`),
                        c = document.querySelector(`[data-mob*=${o}]`);

                    function i() {
                        let e;
                        window.innerWidth <= r ? (e = c.dataset.mob.split(", ")[1] ? c.dataset.mob.split(", ")[1] : "append", a(s, c, e)) : (e = n.dataset.desk.split(", ")[1] ? n.dataset.desk.split(", ")[1] : "append", a(s, n, e))
                    }

                    function a(e, t, s = "append") {
                        "after" == s ? t.after(e) : "before" == s ? t.before(e) : "append" == s ? t.append(e) : "prepend" == s && t.prepend(e)
                    }
                    i(), window.addEventListener("resize", (function() {
                        i()
                    }))
                }
        }(),
        function() {
            const e = document.querySelectorAll(".animate"),
                t = new IntersectionObserver(((e, t) => {
                    e.forEach((e => {
                        if (e.isIntersecting) {
                            const s = e.target;
                            s.classList.add("active"), t.unobserve(s)
                        }
                    }))
                }), {
                    threshold: .3
                });
            e.forEach((e => {
                t.observe(e)
            }))
        }();
    const s = (t, s) => {
        const o = t.getAttribute("href").replace("#", "");
        if (!o.includes(".html"))
            if ("/" === window.location.pathname || "/index.html" === window.location.pathname) {
                s.preventDefault();
                const t = document.querySelector(`#${o}`).getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;
                window.scrollTo({
                    top: t,
                    behavior: "smooth"
                }), e()
            } else window.location.href = "/#" + o
    };
    window.addEventListener("scroll", (() => {
        (e => {
            const t = document.querySelector("[data-trigger]"),
                s = document.querySelector(".btn_up");
            t && e >= t.offsetTop ? s.classList.add("active") : s.classList.remove("active")
        })(scrollY)
    })), window.addEventListener("resize", (() => {
        t()
    })), document.addEventListener("click", (e => {
        e.target.closest(".btn_up") && (() => {
            const e = document.querySelector(".page");
            window.scrollTo({
                top: e,
                behavior: "smooth"
            })
        })();
        const t = e.target.closest(".tokenomikcs__copy");
        t && (e => {
            const t = e.closest("form").querySelector("input").value,
                s = document.createElement("input");
            s.value = t, document.body.appendChild(s), s.select(), document.execCommand("copy") ? console.log("Done!") : console.log("Failed..."), document.body.removeChild(s)
        })(t);
        const o = e.target.closest(".contacts__submit");
        o && ((e, t) => {
            t.preventDefault();
            const s = e.closest("form"),
                o = s.querySelector("[name=user]"),
                r = s.querySelector("[name=email]");
            "" == o.value ? o.classList.add("error") : o.classList.remove("error"), /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(r.value) ? r.classList.remove("error") : r.classList.add("error"), s.querySelectorAll(".error").length || async function() {
                let e = new FormData(s);
                (await fetch("send.php", {
                    method: "POST",
                    body: e
                })).ok ? s.querySelector(".contacts__block").innerHTML = "Message sent!" : alert("Ошибка отправки формы!")
            }()
        })(o, e);
        const r = e.target.closest(".menu__link:not(.js_follow)");
        r && s(r, e);
        const n = e.target.closest(".menu-footer__link");
        n && s(n, e);
        const c = e.target.closest(".header__logo ");
        c && s(c, e)
    })), document.addEventListener("keydown", (t => {
        "Escape" === t.key && e()
    })), new Swiper(".partners__slider", {
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
        loop: !0,
        slidesPerView: 2,
        spaceBetween: 5,
        autoplay: {
            delay: 2e3
        },
        speed: 800,
        breakpoints: {
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            993: {
                slidesPerView: 5
            }
        }
    }), new Swiper(".start__slider", {
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
        slidesPerView: 1.2,
        spaceBetween: 45,
        breakpoints: {
            576: {
                slidesPerView: 2.2
            },
            768: {
                slidesPerView: 3.2
            },
            993: {
                slidesPerView: 4
            }
        }
    }), window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=cc4cba07-9f22-4212-8d30-785632c152f4",
        strictTokenList: !1,
        formProps: {
            fixedOutputMint: !0,
            initialInputMint: "So11111111111111111111111111111111111111112",
            initialOutputMint: "AHW5N8iqZobTcBepkSJzZ61XtAuSzBDcpxtrLG6KUKPk"
        }
    })
})();