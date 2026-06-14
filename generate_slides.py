import os

directory = "/home/flavio/Documentos/apresentacao_BD/apresentacao_BD"

template = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Termo de Referência</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="conteudo-slide">
        <img class="imagem-adaptavel" src="imagem_slide_{num}.png" alt="Termo de Referência">
        
        <div class="navegacao">
            <a href="slide{prev}.html" class="btn-nav btn-anterior">anterior</a>
            <a href="slide{next}.html" class="btn-nav btn-proximo">próximo</a>
        </div>
    </div>

</body>
</html>"""

for i in range(24, 71):
    prev_num = i - 1
    next_num = i + 1
    content = template.format(num=i, prev=prev_num, next=next_num)
    filename = os.path.join(directory, f"slide{i}.html")
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created {filename}")
