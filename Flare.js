(function() {
    window.flare = {
        // Манипуляции с DOM
        Dom: {
            SozdatElement: function(tag, content, id, classes, parent) {
                let el = document.createElement(tag);
                el.innerHTML = content;
                if (id) el.id = id;
                if (classes) el.className = classes;
                if (parent) parent.appendChild(el);
                return el;
            },
            DobavitStil: function(element, styles) {
                for (let key in styles) {
                    element.style[key] = styles[key];
                }
            },
            UdalitElement: function(element) {
                element.remove();
            },
            DobavitSobytieMyshi: function(element, eventType, handler) {
                element.addEventListener(eventType, handler);
            },
            DobavitSobytieKlaviatury: function(element, eventType, handler) {
                element.addEventListener(eventType, handler);
            },
            DobavitClass: function(element, className) {
                element.classList.add(className);
            },
            UdalitClass: function(element, className) {
                element.classList.remove(className);
            },
            SozdatKnopku: function(content, onClick, id, classes, parent) {
                let button = document.createElement('button');
                button.innerHTML = content;
                if (id) button.id = id;
                if (classes) button.className = classes;
                if (parent) parent.appendChild(button);
                else document.body.appendChild(button);
                if (onClick) button.onclick = onClick;
                return button;
            },
            SozdatPoleVvoda: function(placeholder, onSubmit, id, classes, parent) {
                let napishat = document.createElement('div');
                let input = document.createElement('input');
                input.type = 'text';
                input.placeholder = placeholder;

                napishat.appendChild(input);
                if (id) napishat.id = id;
                if (classes) napishat.className = classes;
                if (parent) parent.appendChild(napishat);

                input.addEventListener('blur', function() {
                    let enteredText = input.value;
                    onSubmit(enteredText);
                    napishat.remove();
                });

                napishat.addEventListener('click', function() {
                    input.focus();
                });

                return napishat;
            },
            SozdatViborFaila: function(onChange, id, classes, parent) {
                let vibrat = document.createElement('div');
                let input = document.createElement('input');
                input.type = 'file';

                vibrat.appendChild(input);
                if (id) vibrat.id = id;
                if (classes) vibrat.className = classes;
                if (parent) parent.appendChild(vibrat);

                input.addEventListener('change', function() {
                    let file = input.files[0];
                    if (onChange) onChange(file);
                });

                return vibrat;
            },
            SozdatChekBoksy: function(count, onChange, id, classes, parent) {
                let chek = document.createElement('div');

                for (let i = 0; i < count; i++) {
                    let checkboxWrapper = document.createElement('div');
                    let input = document.createElement('input');
                    input.type = 'checkbox';
                    input.id = `${id}_checkbox_${i}`;

                    input.addEventListener('change', function() {
                        if (onChange) onChange(input.checked, i);
                    });

                    checkboxWrapper.appendChild(input);
                    chek.appendChild(checkboxWrapper);
                }

                if (id) chek.id = id;
                if (classes) chek.className = classes;
                if (parent) parent.appendChild(chek);

                return chek;
            },
            SozdatChislovoiVvod: function(min, max, onChange, id, classes, parent) {
                let vibrat = document.createElement('div');
                let input = document.createElement('input');
                input.type = 'number';
                input.min = min;
                input.max = max;

                vibrat.appendChild(input);
                if (id) vibrat.id = id;
                if (classes) vibrat.className = classes;
                if (parent) parent.appendChild(vibrat);

                input.addEventListener('change', function() {
                    let value = input.value;
                    if (onChange) onChange(value);
                });

                return vibrat;
            }
        },

        // Асинхронные запросы
        AsinhronnyeZaprosy: function(method, url, callback) {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    callback(null, xhr.responseText);
                } else {
                    callback(xhr.statusText, null);
                }
            };
            xhr.onerror = function() {
                callback(xhr.statusText, null);
            };
            xhr.send();
        },

        // Локальное хранилище
        Lokalnoexranilishe: {
            UstanovitElement: function(key, value) {
                localStorage.setItem(key, value);
            },
            PoluchitElement: function(key) {
                return localStorage.getItem(key);
            },
            UdalitElement: function(key) {
                localStorage.removeItem(key);
            },
            Ochistit: function() {
                localStorage.clear();
            }
        },

        // Таймеры и интервалы
        Vremya: function(callback, delay) {
            return setTimeout(callback, delay);
        },
        OstanovitVremya: function(timeoutId) {
            clearTimeout(timeoutId);
        },
        Interval: function(callback, interval) {
            return setInterval(callback, interval);
        },
        OstanovitInterval: function(intervalId) {
            clearInterval(intervalId);
        }
    };

    // Переопределим команды для использования русских имён
    window.pechat = function(message) {
        console.log(message);
    };
    window.pish = function() {
        return prompt("Введите данные: ");
    };
    window.peremennye = function(name, value) {
        window[name] = value;
    };
    window.esli = function(condition, trueBlock, falseBlock) {
        if (condition) {
            trueBlock();
        } else if (falseBlock) {
            falseBlock();
        }
    };
    window.poka = function(condition, block) {
        while (condition) {
            block();
        }
    };
    window.dlya = function(start, condition, step, block) {
        for (let i = start; condition(i); i += step) {
            block(i);
        }
    };
    window.massivy = {
        Dobavit: function(arr, value) {
            arr.push(value);
        },
        Udalit: function(arr, value) {
            let index = arr.indexOf(value);
            if (index !== -1) {
                arr.splice(index, 1);
            }
        },
        Pechat: function(arr) {
            arr.forEach(item => pechat(item));
        }
    };
    window.stroki = {
        Dlinna: function(str) {
            return str.length;
        },
        VVerhniyRegistr: function(str) {
            return str.toUpperCase();
        },
        VNizhniyRegistr: function(str) {
            return str.toLowerCase();
        },
        Podstroka: function(str, start, end) {
            return str.substring(start, end);
        },
        Zamena: function(str, search, replace) {
            return str.replace(search, replace);
        }
    };
    window.chisla = {
        Plus: function(a, b) {
            return a + b;
        },
        Minus: function(a, b) {
            return a - b;
        },
        Umnozhit: function(a, b) {
            return a * b;
        },
        Podelit: function(a, b) {
            return a / b;
        },
        Sluchaynoe: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
    window.canvas = {
        SozdatCanvas: function(id, width, height) {
            let canvas = document.createElement('canvas');
            canvas.id = id;
            canvas.width = width;
            canvas.height = height;
            document.body.appendChild(canvas);
            return canvas.getContext('2d');
        },
        RisovatPryamougolnik: function(ctx, x, y, width, height, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
        },
        RisovatKrug: function(ctx, x, y, radius, color) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
        }
    };

    window.timer = flare.Vremya;
    window.interval = flare.Interval;
    window.ostanovitVremya = flare.OstanovitVremya;
    window.ostanovitInterval = flare.OstanovitInterval;
    window.dom = flare.Dom;
    window.lokalnoexranilishe = flare.Lokalnoexranilishe;
})();
