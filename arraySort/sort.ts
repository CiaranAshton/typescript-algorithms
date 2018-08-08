const sortString = () => {
    const arr: ReadonlyArray<string> = ['foo', 'bar'];
    const newArr = arr.slice().sort();
    console.log(newArr);
};

const sortNumbers = () => {
    const foo = [1, 3, 22];
    foo.sort((a, b) => a - b);

    console.log(foo);
};

const movies = [
    {
        name: 'The Shawshank Redemtion',
        year: 1994,
    },
    {
        name: 'The Godfather',
        year: 1972,
    },
    {
        name: 'The Godfather: Part II',
        year: 1974,
    },
    {
        name: 'The Dark Knight',
        year: 2008,
    },
];

movies.sort((a, b) => a.year - b.year);

export { sortString, sortNumbers };
