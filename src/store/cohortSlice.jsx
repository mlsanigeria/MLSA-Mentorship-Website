import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCohorts: [],
    currentCohort: [],
    nextCohort: [],
    pastCohorts: [],
}

const cohortSlice = createSlice({
    name: 'cohorts',
    initialState,
    reducers: {
        updateCohorts: (state, action) => {
            const { cohorts } = action.payload
            
            // Filter cohorts
            const currentCohort = cohorts.filter(cohort => cohort.fields.is_current_cohort === 'Yes' && cohort.fields.is_next_cohort === 'No' && cohort.fields.is_past_cohort === 'No')
            const nextCohort = cohorts.filter(cohort => cohort.fields.is_next_cohort === 'Yes' && cohort.fields.is_current_cohort === 'No' && cohort.fields.is_past_cohort === 'No')
            const pastCohorts = cohorts.filter(cohort => cohort.fields.is_past_cohort === 'Yes' && cohort.fields.is_current_cohort === 'No' && cohort.fields.is_next_cohort === 'No')

            // Update state
            state.allCohorts = cohorts
            state.currentCohort = currentCohort
            state.nextCohort = nextCohort
            state.pastCohorts = pastCohorts
        },
    },
})


export default cohortSlice.reducer
export const { updateCohorts } = cohortSlice.actions