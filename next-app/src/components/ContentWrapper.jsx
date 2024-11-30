function ContentWrapper({children}){
    return (
        <main className="p-4 flex flex-col">
            {children}
        </main>
    );
}

export default ContentWrapper;