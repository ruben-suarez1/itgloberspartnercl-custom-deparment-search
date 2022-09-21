import React, { useState } from 'react'
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import DepartmentGroup from './DepartmentGroup'
import styles from "./styles.css"

import { SearchBar } from "vtex.store-components";

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log("mi slug seleccionado es:", slug)

  return loading
  ?
    <div>Loading...</div>
  :
    <div>
      <h2 className={styles["department__title"]}>Busqueda por departamentos</h2>
      <div  className={styles["department__container"]}>
        <DepartmentGroup
            departments={data?.categories[0]?.children}
            handleSetSlug={setSlug}
        />
        <SearchBar
          customSearchPageUrl={slug}
          placeholder="Que buscas..."
          displayMode="search-and-clear-buttons"
        />
      </div>
    </div>
}

export default DepartmentSearch
