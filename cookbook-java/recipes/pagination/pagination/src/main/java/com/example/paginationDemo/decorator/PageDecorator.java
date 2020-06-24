package com.example.paginationDemo.decorator;

import org.springframework.data.domain.Page;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Links;

import java.util.List;

public class PageDecorator {
    private final Page page;
    private final Links pageLinks;
    private static final String PREV_RELATION = "prev";
    private static final String NEXT_RELATION = "next";
    private static final String FIRST_RELATION = "first";
    private static final String LAST_RELATION = "last";
    private static final String SELF_RELATION = "self";

    public PageDecorator(final Page page, final Links pageLinks) {
        this.page = page;
        this.pageLinks = pageLinks;
    }

    public List getData() {
        return this.page.getContent();
    }

    public long getTotalElements() {
        return page.getTotalElements();
    }

    public int getLimit() {
        return page.getSize();
    }

    public long getOffset() {
        return page.getPageable().getOffset();
    }

    public int getTotalPages() {
        return page.getTotalPages();
    }

    public boolean isLast() {
        return page.isLast();
    }

    public int getNumberOfElements() {
        return page.getNumberOfElements();
    }

    public int getPreviousPage() {
        return !page.isEmpty() ? page.previousOrFirstPageable().getPageNumber() + 1 : page.getTotalPages();
    }

    public int getCurrentPage() {
        return !page.isEmpty() ? page.getNumber() + 1 : page.getTotalPages();
    }

    public int getNextPage() {
        return !page.isEmpty() ? page.nextOrLastPageable().getPageNumber() + 1 : page.getTotalPages();
    }

    public boolean isFirst() {
        return page.isFirst();
    }

    public boolean isEmpty() {
        return page.isEmpty();
    }

    public String getPreviousPageLink() {
        return !page.isEmpty() ? this.getLink(PREV_RELATION) : this.getLink(LAST_RELATION);
    }

    public String getNextPageLink() {
        return this.getLink(NEXT_RELATION);
    }

    public String getFirstPageLink() {
        return this.getLink(FIRST_RELATION);
    }

    public String getLastPageLink() {
        return this.getLink(LAST_RELATION);
    }

    public String getCurrentPageLink() {
        return !page.isEmpty() ?  this.getLink(SELF_RELATION) : this.getLink(LAST_RELATION);
    }

    private String getLink(final String relation) {
        return this.pageLinks.getLink(relation).map(Link::getHref).orElse(null);
    }

}
