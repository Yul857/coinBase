import Card from "react-bootstrap/Card";

export const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mx-4">
        <div className="text-3xl text-gray-900 font-bold w-max mx-2">
          <h2> Business Intelligence</h2>
        </div>
        <div className="flex justify-around">
          <div className="mx-4">
            <button className="px-1 text-xs text-gray-500 hover:text-gray-600 whitespace-nowrap  font-bold border-b-2  border-orange-500 pb-1 pt-1.5 ">
              LAST 7 DAYS
            </button>
          </div>
          <div className="mx-4">
            <button className="px-1 text-xs text-gray-500 hover:text-gray-600 whitespace-nowrap ">
              LAST 4 WEEKS
            </button>
          </div>
          <div className="mx-4">
            <button className="px-1 text-xs text-gray-500 hover:text-gray-600 whitespace-nowrap ">
              LAST 6 MONTHS
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-start">
          <div className="flex flex-col w-2/5 items-center ">
            <div className="flex w-full justify-start mt-5  h-full">
              <Card className="flex border-2 w-full mr-4 shadow-sm rounded-sm">
                <Card.Body>
                  <Card.Title className="flex font-bold m-4 text-lg">Unresolved Issues</Card.Title>
                  <Card.Text>
                    Here is the content of unresolved issues
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="flex flex-col w-3/5">
            <div className="flex w-full justify-start mt-5">
              <Card className="flex border-2 w-full h-36 shadow-sm rounded-sm mr-4">
                <Card.Body>
                  <Card.Title className="flex font-bold m-4 text-lg">
                    Sentiment Scores
                  </Card.Title>
                  <Card.Text>
                    Here is the content of sentiment scores
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="flex w-full justify-start mt-2">
              <Card className="flex border-2 w-full h-60 shadow-sm rounded-sm mr-4">
                <Card.Body>
                  <Card.Title className="flex font-bold m-4 text-lg">
                      Shopping Trends
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="flex justify-between">
              <div className="flex w-1/2 justify-start mt-2">
                <Card className="flex border-2 w-full h-28 shadow-sm rounded-sm mr-4">
                  <Card.Body>
                    <Card.Title className="flex font-bold m-4 text-lg">Total Sales</Card.Title>
                    <Card.Text>
                      Here is the content of total sales
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="flex w-1/2 justify-start mt-2">
                <Card className="flex border-2 w-full h-28 shadow-sm rounded-lg mr-4">
                  <Card.Body>
                    <Card.Title className="flex font-bold m-4 text-lg">Total Purchases</Card.Title>
                    <Card.Text>
                      Here is the content of total purchases
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex w-1/2 justify-start mt-2">
                <Card className="flex border-2 w-full h-28 shadow-sm rounded-lg mr-4">
                  <Card.Body>
                    <Card.Title className="flex font-bold m-4 text-lg">New Costomer</Card.Title>
                    <Card.Text>
                      Here is the data of new customers
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="flex w-1/2 justify-start mt-2">
                <Card className="flex border-2 w-full h-28 shadow-sm rounded-lg mr-4">
                  <Card.Body>
                    <Card.Title className="flex font-bold m-4 text-lg">Total customers</Card.Title>
                    <Card.Text>
                      Here is the data of total customers
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};