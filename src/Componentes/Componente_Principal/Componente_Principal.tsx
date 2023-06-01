import Componente1 from "../Componente1/Componente1.tsx"
import Componente2 from "../Componente2/Componente2.tsx"
import Componente_Principal2 from "../Componente_Principal2/Componente_Principal2"






const Componente_Principal = (props: any) => {
return(
<div className="card-body">
    <Componente1 />
    <Componente2 />
    <Componente_Principal2 />
</div>
)
}

export default Componente_Principal