import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
            name: 'Jennifer',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],

    products: [
        {
            
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 10,
            desc: 'high quality shirt'
        },

        {
           
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 20,
            brand: 'Puma',
            rating: 4.3,
            numReviews: 13,
            desc: 'high quality shirt'
        },

        {
           
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'pants',
            image: '/images/p3.jpg',
            price: 70,
            countInStock: 0,
            brand: 'Nike',
            rating: 3.8,
            numReviews: 23,
            desc: 'high quality item'
        },

        {
          
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'pants',
            image: '/images/p4.jpg',
            price: 95,
            countInStock: 23,
            brand: 'Nike',
            rating: 4.2,
            numReviews: 12,
            desc: 'high quality item'
        },
    ],
}

export default data