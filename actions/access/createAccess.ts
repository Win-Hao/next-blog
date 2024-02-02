'use server'

export async function CreateAccess(status: boolean, formData: FormData) {
    const {
        module_name,
        action_name,
        type,
        url,
        module_id,
        sort,
        description,

    } = Object.fromEntries(formData)
    const data = {
        module_name,
        module_id: parseInt(module_id.toString()),
        action_name,
        type: parseInt(type.toString()),
        url,
        sort: parseInt(sort.toString()),
        description,
        status: status ? 1 : 0
    }
    console.log(data)
}
