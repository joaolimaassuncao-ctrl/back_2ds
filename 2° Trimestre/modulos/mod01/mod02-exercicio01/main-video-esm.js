
import { alugarFilme, listarFilmesDisponiveis } from './video-esm.js';

console.log("=== VIDEOTECA - Sistema de Aluguel ===\n");

const recibo1 = alugarFilme("Duna: Parte Dois", "2026-06-23");
console.log(recibo1.mensagem);

const recibo2 = alugarFilme("Oppenheimer", "2026-06-15");
console.log(recibo2.mensagem);


console.log("\n📋 Filmes disponíveis para aluguel:");
listarFilmesDisponiveis().forEach((filme, index) => {
    console.log(`  ${index + 1}. ${filme}`);
});

console.log("\nSistema ESM executado com sucesso!");