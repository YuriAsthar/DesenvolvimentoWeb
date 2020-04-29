import Reserva from '../models/Reserva';

class ReservaController 
{
    async index(req, res) 
    {
        const reservas = await Reserva.find();

        return res.json(reservas);
    }

    async show(req, res)
    {
        const { reserva_id } = req.body;

        let reserva = await Reserva.findById(reserva_id);

        return res.json(reserva);
    }

    async store()
    {
        let reserva = await Reserva.create(req.body);
        
        return res.json(reserva);
    }

    async update(req, res)
    {
        const { reserva_id, responsavel, hotel, dataInicial, dataFinal, qtdeHospedes } = req.body;

        let reserva = await Reserva.updateOne({ id: hotel_id }, { responsavel, hotel, dataInicial, dataFinal, qtdeHospedes });

        return res.json(reserva);
    }

    async destroy(req, res)
    {
        const { reserva_id } = req.body;

        let reserva = await Reserva.findByIdAndDelete({ id: reserva_id });

        return res.json(reserva);
    }
}

export default new ReservaController;