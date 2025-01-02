const ParallelLayout = ({archive , latest})=>{

  return(
    <div>
      <section>
        {archive}
      </section>

      <section>
        {latest}
      </section>
    </div>
  )
}

export default ParallelLayout;