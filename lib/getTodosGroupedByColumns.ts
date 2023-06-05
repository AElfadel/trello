import { databases } from "@/appwrite"

export const getTodosGroupedByColumns = async() => {
    const data = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID!,process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );
    console.log(data)

    const todos = data.documents;

    const columns = todos.reduce((acc, todo)=> {
    //reduce is an accumelator function. It reduces an array into another form.
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }
        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            //get the image if tit exists on the todo
            ...(todo.image && { image: JSON.parge(todo.image)})
        });

        return acc;
    }, new Map<TypedColumn,  Column>)

    console.log(columns);
    //This is a data structures and algorithms bit. We transformed and classified data. The data went from an array of objects grouped together to different arrays grouped based on a parameter like our enum "todo | inprogress | done" we mapped through them, placed each todo where it belongs based on its status then placed it in a new array.

    //Why are two columns mapped for the the above console.log!? and three for the next one??

    //Now if the columns doesnt have inprogress, todo and done, add them with empty todos.

    const columnTypes: TypedColumn[] = ["todo","in-progress","done"];

    for (const columnType of columnTypes) {
        if (!columns.get(columnType)) {
            columns.set(columnType, {
                id: columnType,
                todos:[],
            }) 
        }
    }

    console.log(columns)

};



