(function() {
    window.flare = {
        // Ваши предыдущие методы ...

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
            },

            // Создание кнопки
            CreateButton: function(content, onClick, id, classes, parent) {
                let button = document.createElement('button');
                button.innerHTML = content;
                if (id) button.id = id;
                if (classes) button.className = classes;
                if (parent) parent.appendChild(button);
                else document.body.appendChild(button);
                if (onClick) button.onclick = onClick;
                return button;
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

    // Добавляем функцию knopka
    window.knopka = function(content) {
        return flare.Dom.CreateButton(content, function() {
            flare.Print(`Кнопка с текстом "${content}" была нажата!`);
        });
    };
})();
