import { useContext } from "react"
import { GoalsContext } from "../context/GoalsContext"

export function useGoals() {
  const context = useContext(GoalsContext)

  if (!context) {
    throw new Error(`Outside the scope of the Goals Provider.`)
  }

  return context
}
