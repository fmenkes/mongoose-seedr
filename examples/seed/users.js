module.exports = [
    {
        firstName: 'Terrence',
        lastName: 'Hudnall',
        pets: [
            'ref:pets._id',
            'ref:pets._id'
        ]
    },
    {
        firstName: 'Jordan',
        lastName: 'Kelly',
        pets: [
            {
                size: 'ref:pets.size',
                name: 'ref:pets.name'
            }
        ]
    }
]