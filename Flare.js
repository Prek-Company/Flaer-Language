(function() {
    window.flare = {
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
            },

            // Создание поля ввода
            CreateInput: function(placeholder, onSubmit, id, classes, parent) {
                let napishat = document.createElement('div');
                let input = document.createElement('input');
                input.type = 'text';
                input.placeholder = placeholder;

                napishat.appendChild(input);
                if (id) napishat.id = id;
                if (classes) napishat.className = classes;
                if (parent) parent.appendChild(napishat);

                // Обработчик для ввода текста
                input.addEventListener('blur', function() {
                    let enteredText = input.value;
                    onSubmit(enteredText);
                    napishat.remove();  // Убираем поле ввода после завершения
                });

                napishat.addEventListener('click', function() {
                    input.focus();  // Сразу фокусируемся на поле ввода при клике
                });

                return napishat;
            },

            // Создание выбора файла
            CreateFileInput: function(onChange, id, classes, parent) {
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

            // Создание чекбоксов
            CreateCheckboxes: function(count, onChange, id, classes, parent) {
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

            // Создание числового ввода
            CreateNumberInput: function(min, max, onChange, id, classes, parent) {
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
        }
    };

    // Переопределим команды для использования русских имён
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

    // Добавляем команды для новых элементов
    window.vibrat = function(type, onSubmit) {
        if (type === 'file') {
            return flare.Dom.CreateFileInput(onSubmit);
        }
        if (type === 'chislo') {
            return flare.Dom.CreateNumberInput(0, 100, onSubmit);  // Пример с диапазоном от 0 до 100
        }
        if (type === 'Chek') {
            return flare.Dom.CreateCheckboxes(2, onSubmit); // Пример с 2 чекбоксами
        }
    };
})();
