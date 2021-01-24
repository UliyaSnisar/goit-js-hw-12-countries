import articleTpl from '../templeats/article.hbs';
import listTpl from '../templeats/list.hbs';
import refs from './refs';
import { error, notice } from './notification';

function updateMarkup(countries) {
    console.log('countries: ', countries);
    console.log('amount of countries: ', countries.length);

    if (countries.length === undefined) {
        error({
            title: 'Страны с таким названием не существует. Пожалуйста, уточните запрос!',
            hide: true,
            delay: 2000,
        });
    } else if (countries.length === 1) {
        const markup = articleTpl(countries);
        refs.container.insertAdjacentHTML('beforeend', markup);
    } else if (countries.length > 1 && countries.length < 11) {
        const markup = listTpl(countries);
        refs.container.insertAdjacentHTML('beforeend', markup);
    } else {
        notice({
            title: 'Найдено слишком много совпадений. Пожалуйста, уточните запрос!',
            hide: true,
            delay: 2000,
        });
    }
} 

export default updateMarkup;