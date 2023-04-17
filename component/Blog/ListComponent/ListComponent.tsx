
function ListingPageComponent({ onScroll, listInnerRef, userList }: any) {
    return (
        <div>
            <div
                onScroll={onScroll}
                ref={listInnerRef}
                style={{ height: "100vh", overflowY: "auto" }}
            >
                {userList.map((item: any, index: any) => {
                    return (
                        <div
                            key={index}
                            style={{
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            }}
                        >
                            <p>Name: {item.name}</p>
                            <p>Trips: {item.trips}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListingPageComponent;
