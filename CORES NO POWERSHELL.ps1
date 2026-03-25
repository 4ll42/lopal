function prompt {
    # Pegar o caminho atual
    $caminhoAtual = $ExecutionContext.SessionState.Path.CurrentLocation.Path
    $pastaPessoal = $env:USERPROFILE 

    # Verificar se o caminho atual está dentro da pasta pessoal
    if ($caminhoAtual.StartsWith($pastaPessoal, [System.StringComparison]::OrdinalIgnoreCase)) {

        # Substituir o caminho com o símbolo "~"
        $caminhoModificado = "~" + $caminhoAtual.Substring($pastaPessoal.Length)

    }

    # Texto base do prompt
    Write-Host "PS " -NoNewline

  #mostra o nome de usuario e o nome do seu computador em verde
    Write-Host $env:USERNAME@$env:COMPUTERNAME -NoNewline -ForegroundColor Green

#pasta amarelo
    Write-Host $caminhoModificado -NoNewline -ForegroundColor Yellow

    # Obter o nome do branch atual
    $gitBranch = git branch --show-current 2>$null
   
   # Se for um repositório Git, acrescenta o nome do branch
   if ($gitBranch) {
    #escrever o nome do branch em CIANO
    Write-Host " (" -NoNewline
    Write-Host  $gitBranch -NoNewline -ForegroundColor Cyan
    Write-Host " )" -NoNewline
   }

    # Retornar o caminho modificado para o shell
    return "> "
}