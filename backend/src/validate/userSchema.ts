import z from 'zod'

const userSchema = z.object({
    name : z.string().min(1)
})

export default userSchema;