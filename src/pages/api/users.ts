import {NextApiRequest, NextApiResponse} from 'next'

export default (request : NextApiRequest, response : NextApiResponse) => {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Di'},
        {id: 3, name: 'Nane'}
    ]

    return response.json(users)
}