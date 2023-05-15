export const Bulb = (props) => {

    const bulbElm = document.createElement('div');
    bulbElm.classList.add('bulb');
    if (props.isOn) { bulbElm.classList.add('bulb--on') };
    bulbElm.addEventListener('click', () => {
        bulbElm.replaceWith(Bulb({
            isOn: !props.isOn,
        }));
    });

    return bulbElm;
}
