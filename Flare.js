(function() {
    window.flare = {
        // Печать текста в консоль
        Print: function(message) {
            console.log(message);
        },

        // Ввод данных через prompt
        Input: function() {
            return prompt("Введите данные: ");
        },

        // Объявление переменной
        letVar: function(name, value) {
            window[name] = value;
        },

        // Условный оператор (if)
        If: function(condition, trueBlock, falseBlock) {
            if (condition) {
                trueBlock();
            } else if (falseBlock) {
                falseBlock();
            }
        },

        // Цикл while
        While: function(condition, block) {
            while (condition) {
                block();
            }
        },

        // Цикл for
        For: function(start, condition, step, block) {
            for (let i = start; condition(i); i += step) {
                block(i);
            }
        },

        // Массивы
        Arrays: {
            Add: function(arr, value) {
                arr.push(value);
            },
            Remove: function(arr, value) {
                let index = arr.indexOf(value);
                if (index !== -1) {
                    arr.splice(index, 1);
                }
            },
            Print: function(arr) {
                arr.forEach(item => flare.Print(item));
            }
        },

        // Работа со строками
        Strings: {
            Length: function(str) {
                return str.length;
            },
            ToUpperCase: function(str) {
                return str.toUpperCase();
            },
            ToLowerCase: function(str) {
                return str.toLowerCase();
            },
            Substring: function(str, start, end) {
                return str.substring(start, end);
            },
            Replace: function(str, search, replace) {
                return str.replace(search, replace);
            }
        },

        // Работа с числами
        Numbers: {
            Add: function(a, b) {
                return a + b;
            },
            Subtract: function(a, b) {
                return a - b;
            },
            Multiply: function(a, b) {
                return a * b;
            },
            Divide: function(a, b) {
                return a / b;
            },
            Random: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        },

        // Графика
        Canvas: {
            CreateCanvas: function(id, width, height) {
                let canvas = document.createElement('canvas');
                canvas.id = id;
                canvas.width = width;
                canvas.height = height;
                document.body.appendChild(canvas);
                return canvas.getContext('2d');
            },
            DrawRect: function(ctx, x, y, width, height, color) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, width, height);
            },
            DrawCircle: function(ctx, x, y, radius, color) {
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 2 * Math.PI);
                ctx.fillStyle = color;
                ctx.fill();
            }
        },

        // Таймер
        Timer: function(callback, delay) {
            setTimeout(callback, delay);
        },

        // Интервал
        Interval: function(callback, delay) {
            return setInterval(callback, delay);
        },

        // Стоп таймер
        StopTimer: function(timerId) {
            clearTimeout(timerId);
        },

        // Стоп интервал
        StopInterval: function(intervalId) {
            clearInterval(intervalId);
        },

        // Манипуляции с DOM
        Dom: {
            CreateElement: function(tag, content, id, classes, parent) {
                let el = document.createElement(tag);
                el.innerHTML = content;
                if (id) el.id = id;
                if (classes) el.className = classes;
                if (parent) parent.appendChild(el);
                return el;
            },
            AddStyle: function(element, styles) {
                for (let key in styles) {
                    element.style[key] = styles[key];
                }
            },
            RemoveElement: function(element) {
                element.remove();
            }
        }
    };

    // Переопределим команды, чтобы использовать русские имена
    window.pechat = flare.Print;
    window.pish = flare.Input;
    window.peremennye = flare.letVar;
    window.esli = flare.If;
    window.poka = flare.While;
    window.dlya = flare.For;
    window.massivy = flare.Arrays;
    window.stroki = flare.Strings;
    window.chisla = flare.Numbers;
    window.canvas = flare.Canvas;
    window.timer = flare.Timer;
    window.interval = flare.Interval;
    window.stopTimer = flare.StopTimer;
    window.stopInterval = flare.StopInterval;
    window.dom = flare.Dom;
})();