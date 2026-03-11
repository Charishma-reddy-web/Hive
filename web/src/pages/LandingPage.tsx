import { BlockRenderer } from '../blocks/BlockRenderer'
import { getLandingPage } from '../api/pages'
import { PageFooter } from '../components/PageFooter'
import { PageHeader } from '../components/PageHeader'
import { PageSeo } from '../components/PageSeo'
import { useData } from '../hooks/useData'

export default function LandingPage() {
  const { data: pageData, errorMessage: pageErrorMessage, isLoading: isLoadingPage } = useData(
    () => getLandingPage('home'),
    []
  )

  return (
    <>
      <PageSeo page={pageData} />
      <div id="top">
        <PageHeader header={pageData?.header} />
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {isLoadingPage ? <div className="rounded-2xl border border-slate-200 p-6">Loading page...</div> : null}
          {!isLoadingPage && pageErrorMessage ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
              {pageErrorMessage}
            </div>
          ) : null}
          {!isLoadingPage && !pageErrorMessage && !pageData ? (
            <div className="rounded-2xl border border-slate-200 p-6">
              Create a page in Payload CMS with the slug "home".
            </div>
          ) : null}
          {!isLoadingPage && !pageErrorMessage && pageData ? (
            <BlockRenderer blocks={pageData.layout || []} />
          ) : null}
        </main>
        <PageFooter footer={pageData?.footer} />
      </div>
    </>
  )
}
