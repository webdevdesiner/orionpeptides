export async function post({ request }: { request: Request }) {
  try {
    const form = await request.formData();
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const whatsapp = String(form.get('whatsapp') || '');
    const tipo = String(form.get('tipo') || '');

    // Basic validation
    if (!email || !name) {
      return new Response(JSON.stringify({
        status: 'erro',
        mensagem: 'Nome e e-mail são obrigatórios.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // TODO: Integrate with email service, CRM or webhook here.
    // For now, return a success JSON to confirm receipt.

    return new Response(JSON.stringify({
      status: 'sucesso',
      mensagem: 'Obrigado! Recebemos seu cadastro. Entraremos em contato em breve.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      status: 'erro',
      mensagem: 'Erro interno ao processar o formulário.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

