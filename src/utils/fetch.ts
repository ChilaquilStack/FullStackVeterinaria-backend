export default async function fetch(callback: Function) {

    let data = null;
    let error = null;

    try {
        data = await callback();
    } catch (e: any) {
        error = e.message
    }

    return { data, error }

}   