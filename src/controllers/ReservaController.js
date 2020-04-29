import Reserva from '../models/Reserva';

class ReservaController 
{
    async index(req, res) 
    {
        const { responsavel } = req.body;
        
        let reservas =  await Reserva.find({ responsavel});

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
        const { usuario_id, dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;

        let reserva = await Reserva.create({ 
            responsavel: usuario_id,
            hotel: hotel_id,
            dataInicial,
            dataInicial,
            qtdeHospedes,
        });
        
        await reserva.populate("responsavel").populate("hotel").execPopulate();

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