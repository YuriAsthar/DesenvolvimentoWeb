import * as Yup from 'yup';
import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';

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

    async store(req, res)
    {
        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;

        const schema = Yup.object().shape({
            dataFinal: Yup.string().required(),
            dataInicial: Yup.string().required(),
            qtdeHospedes: Yup.string().required(),
        });
        
        if (! (await schema.isValid(req.body))) {
            return res.status(400).json({ mensagem: "Dados inválidos !"});
        }

        Usuario.findById(usuario_id).catch((err) => {
            return res.status(401).json({ mensagem: "Usuário não autorizado!"});
        });

        Hotel.findById(Hotel_id).catch((err) => {
            return res.status(400).json({ mensagem : "Hotel inválido  !"});
        });

        let reserva = await Reserva.create({ 
            responsavel: usuario_id,
            hotel: hotel_id,
            dataInicial,
            dataInicial,
            qtdeHospedes,
        });
        
        await reserva.populate('responsavel').populate('hotel').execPopulate();

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