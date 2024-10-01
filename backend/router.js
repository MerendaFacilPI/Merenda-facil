// Importe as dependências necessárias
import { Router } from 'express';
const router = Router();
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { findOne } from '../models/User'; // Importe o modelo do usuário

// Rota para o login do usuário
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifique se o usuário existe no banco de dados
    const user = await findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verifique se a senha está correta
    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gere um token JWT para o usuário
    const token = sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

    // Envie o token de volta para o cliente
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});
// Rota para lidar com requisições POST na URL /api/login
// eslint-disable-next-line no-undef
app.post('/api/login', (req, res) => {
  // Aqui você pode adicionar a lógica para autenticar o usuário
  // e responder de acordo com o resultado da autenticação
  const { email, password } = req.body;

  // Exemplo simples de autenticação (substitua com a sua lógica real)
  if (email === 'adminmerendaescolar@gmail.com' && password === 'adminescolar') {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Outras rotas...

export default router;
