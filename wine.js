const botellas = 1000
const ratones = 10

const asignaciones = Array.from({ length: botellas }, (_, i) => {
  const binario = i.toString(2).padStart(ratones, '0')
  const ratonesAsignados = []

  for (let j = 0; j < ratones; j++) {
    if (binario[j] === '1') ratonesAsignados.push(j + 1)
  }

  return { botella: i, ratones: ratonesAsignados }
})

console.log('asignacion de ratones por botella (muestra 20):')
console.log(asignaciones.slice(0, 999))

const botellaEnv = Math.floor(Math.random() * botellas)
console.log('botella envenenada:', botellaEnv)

const ratonesMuertos = asignaciones[botellaEnv].ratones
console.log('ratones muertos:', ratonesMuertos)

const codigoMuertos = Array.from({ length: ratones }, (_, j) =>
  ratonesMuertos.includes(j + 1) ? '1' : '0'
).join('')

const botellaDetectada = parseInt(codigoMuertos, 2)
console.log('botella detectada por ratones muertos:', botellaDetectada)

if (botellaDetectada === botellaEnv) {
  console.log('Éxito: se encontró la botella correcta.')
} else {
  console.log('Error: la detección falló.')
}
