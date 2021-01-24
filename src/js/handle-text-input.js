import fetchCountries from './fetch-countries';
import refs from './refs';

import updateMarkup from './update-markup';

const debounce = require('lodash.debounce');



function hendleTextInput(event) {
    const countryName = event.target.value;

    if (countryName === '') {
        return;
    }

    refs.container.innerHTML = '';

    fetchCountries(countryName).then(updateMarkup);
}
refs.input.addEventListener('input', debounce(hendleTextInput, 500));