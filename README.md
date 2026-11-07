# Задание 5 — Three.js WebAR

**Запуск:** https://mariikkkk.github.io/webar-pr5/

Открыть в Chrome на Android, разрешить камеру и нажать «Начать AR». На компьютере доступен 3D-предпросмотр. Проверено на OnePlus 15, Android 17, Chrome 156.0.8078.47.

## Возможности

- Куб, сфера и тор; выбор цвета материала из списка: синий, красный, зелёный, жёлтый.
- Поворот на ±15°, автовращение 0,7 рад/с, сброс.
- MeshStandardMaterial: metalness 0,45 и roughness 0,28.
- Карта окружения из RoomEnvironment и PMREMGenerator.
- HTML-панель внутри AR через DOM overlay; beforexrselect предотвращает размещение при работе с кнопками.
- Объект размещается перед камерой однократно и остаётся в мировых координатах. Кнопка «Передо мной» возвращает его в поле зрения. Касание вне панели при видимом зелёном кольце переносит объект на найденную поверхность.

## Как читать код

1. `index.html` — обычные кнопки, список форм и выбор цвета. CSS задаёт только положение панели и доступность нажатий в AR.
2. `src/UIController.js` — обработчики кнопок: вызывают методы объекта.
3. `src/ModelManager.js` — выбор геометрии через `if/else`, цвет, вращение и сброс.
4. `src/EnvironmentManager.js` — создание карты окружения для PBR.
5. `src/App.js` — создание сцены и отрисовка каждого кадра.
6. `src/ARController.js` — запуск и завершение WebXR, поиск поверхности и размещение.

Папка `vendor` содержит готовую библиотеку Three.js, а не авторский код задания.

## Структура

`src/`: App, ModelManager, EnvironmentManager, ARController, UIController. Three.js 0.170.0 поставляется локально в `vendor/`.

## Исправление совместимости

В `vendor/three.module.js` изменён выбор слоя WebXR: для `environmentBlendMode === 'alpha-blend'` используется XRWebGLLayer. На проверенном Android Chrome исходный XRProjectionLayer не показывал объект поверх камеры. После изменения отображение куба и тора проверено на телефоне. Остальной код библиотеки не изменён.

Three.js распространяется по MIT, см. `licenses/three-MIT.txt`.

Задание 6: [Unity WebXR](https://mariikkkk.github.io/webar-pr6/) · [репозиторий](https://github.com/mariikkkk/webar-pr6).
