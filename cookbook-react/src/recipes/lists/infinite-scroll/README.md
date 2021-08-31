# Infinite Scroll

A component that allows you to integrate an infinite scroll without much effort, it also does not negatively impact the performance of your application.

The component uses **Intersection Observer API** ([visit the official site](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)) so as not to affect the performance of your application.

# Props

|Prop Name|Description|type
|-------------|--------------|-------|
|children|List of elements. pass them as if it were a wrapper. On this list, the moment when the user reaches the end to obtain the following pages will be calculated|`ReactNode`|
|onLoadMore|The function that will be called when the user reaches the end of the list. It is supposed that in this function you must add the logic that obtains the elements of the next page, and concatenates them with the list|`() => void`|
|isLoading|helps the component decide when to show loading|`boolean`|true/false
|hasMore|It is extremely important to notify the component if it should continue requesting the following pages or if it should no longer do so, this avoids unnecessary requests|`boolean`|true/false
|loader?|it's optional. 1). If you do not send anything, the component will show a default loading with a predefined text. 2) If you send a sting, the component will show a default loading with the sent text 3) If you send a `JSX.Element` the component will show that `JSX. Element`|`JSX.Element|string`
|endMessage?|it's optional. 1) If you don't send anything, the component will show a predefined text. 2) If you send a `sting`, the component will show the text sent. 3) If you send a `JSX.Element` the component will show that `JSX. Element`|`JSX.Element|string`
|className?|it's optional. Add any custom class you want in the listing container|`string`

## Examples
    <InfiniteScroll
	    onLoadMore={nextPage}
	    hasMore={hasMore}
	    isLoading={isLoading}
	    loader={<div  className={styles.loading}>Loading...</div>} 
	>
		{list.map((item) => (
			<div  key={item.id}>{item.name}</div>
		))}
	</InfiniteScroll>    

   ## Demo

    cd cookbook-react
    npm install
    npm run start

To see the demo use the url [http: // localhost: 3000 /? Category = lists & component = infinite-scroll & compact = true](http:%20//%20localhost:%203000%20/?%20Category%20=%20lists%20&%20component%20=%20infinite-scroll%20&%20compact%20=%20true)