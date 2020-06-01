import Hotel from '../models/Hotel';

class HotelController 
{
    async store(req, res)
    {
        const { usuario_id } = req.headers;
        const arquivo = req.file;
        
        let hotel = await Hotel.create(req.body);
        
        return res.json(hotel);
    }

    async index(req, res)
    {   
        const hoteis = await Hotel.find();

        return res.json(hoteis);
    }

    async update(req, res)
    {
        const { hotel_id, nome, uf, municipio, endereco, qtdeAptos, valorDaria } = req.body;

        let hotel = await Hotel.updateOne({ id: hotel_id }, { nome, uf, municipio, endereco, qtdeAptos, valorDaria });

        return res.json(hotel);
    }

    async destroy(req, res)
    {
        const { hotel_id } = req.body;

        let hotel = await Hotel.findByIdAndDelete(hotel_id);

        return res.json(hotel);
    }
}

export default new HotelController;
